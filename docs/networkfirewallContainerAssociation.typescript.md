# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association awscc_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociation(scope: Construct, id: string, config: NetworkfirewallContainerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations">putContainerMonitoringConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainerMonitoringConfigurations` <a name="putContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations"></a>

```typescript
public putContainerMonitoringConfigurations(value: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkfirewallContainerAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">containerAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations">containerMonitoringConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">resolvedCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">containerAssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput">containerMonitoringConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">containerAssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerAssociationArn`<sup>Required</sup> <a name="containerAssociationArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```typescript
public readonly containerAssociationArn: string;
```

- *Type:* string

---

##### `containerMonitoringConfigurations`<sup>Required</sup> <a name="containerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations"></a>

```typescript
public readonly containerMonitoringConfigurations: NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resolvedCidrCount`<sup>Required</sup> <a name="resolvedCidrCount" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```typescript
public readonly resolvedCidrCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```typescript
public readonly tags: NetworkfirewallContainerAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a>

---

##### `containerAssociationNameInput`<sup>Optional</sup> <a name="containerAssociationNameInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```typescript
public readonly containerAssociationNameInput: string;
```

- *Type:* string

---

##### `containerMonitoringConfigurationsInput`<sup>Optional</sup> <a name="containerMonitoringConfigurationsInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput"></a>

```typescript
public readonly containerMonitoringConfigurationsInput: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkfirewallContainerAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```typescript
public readonly containerAssociationName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const networkfirewallContainerAssociationConfig: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">containerAssociationName</a></code> | <code>string</code> | The descriptive name of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations">containerMonitoringConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]</code> | The monitoring configurations for the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">type</a></code> | <code>string</code> | The type of containers to monitor. You can't change the container type after creation. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">description</a></code> | <code>string</code> | A description of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```typescript
public readonly containerAssociationName: string;
```

- *Type:* string

The descriptive name of the container association.

You can't change the name of a container association after you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}

---

##### `containerMonitoringConfigurations`<sup>Required</sup> <a name="containerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations"></a>

```typescript
public readonly containerMonitoringConfigurations: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

The monitoring configurations for the container association.

Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_monitoring_configurations NetworkfirewallContainerAssociation#container_monitoring_configurations}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of containers to monitor. You can't change the container type after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkfirewallContainerAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurations <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const networkfirewallContainerAssociationContainerMonitoringConfigurations: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn">clusterArn</a></code> | <code>string</code> | The ARN of the Amazon ECS or Amazon EKS cluster to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters">attributeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]</code> | Key-value pairs that filter which containers are tracked. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The ARN of the Amazon ECS or Amazon EKS cluster to monitor.

The cluster must be in the same Region and account as the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}

---

##### `attributeFilters`<sup>Optional</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters"></a>

```typescript
public readonly attributeFilters: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

Key-value pairs that filter which containers are tracked.

For Amazon EKS, you can filter by namespace and Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#attribute_filters NetworkfirewallContainerAssociation#attribute_filters}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const networkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key">key</a></code> | <code>string</code> | The attribute key to filter on. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value">value</a></code> | <code>string</code> | The attribute value to match. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The attribute key to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The attribute value to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

### NetworkfirewallContainerAssociationTags <a name="NetworkfirewallContainerAssociationTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const networkfirewallContainerAssociationTags: networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key">key</a></code> | <code>string</code> | The part of the key:value pair that defines a tag. Tag keys are case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value">value</a></code> | <code>string</code> | The part of the key:value pair that defines a tag. Tag values are case-sensitive. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The part of the key:value pair that defines a tag. Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The part of the key:value pair that defines a tag. Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get"></a>

```typescript
public get(index: number): NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get"></a>

```typescript
public get(index: number): NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>[]

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters">putAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters">resetAttributeFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeFilters` <a name="putAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters"></a>

```typescript
public putAttributeFilters(value: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

---

##### `resetAttributeFilters` <a name="resetAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters"></a>

```typescript
public resetAttributeFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters">attributeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput">attributeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeFilters`<sup>Required</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters"></a>

```typescript
public readonly attributeFilters: NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a>

---

##### `attributeFiltersInput`<sup>Optional</sup> <a name="attributeFiltersInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput"></a>

```typescript
public readonly attributeFiltersInput: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>[]

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationContainerMonitoringConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations">NetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>

---


### NetworkfirewallContainerAssociationTagsList <a name="NetworkfirewallContainerAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get"></a>

```typescript
public get(index: number): NetworkfirewallContainerAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>[]

---


### NetworkfirewallContainerAssociationTagsOutputReference <a name="NetworkfirewallContainerAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer"></a>

```typescript
import { networkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallContainerAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags">NetworkfirewallContainerAssociationTags</a>

---



